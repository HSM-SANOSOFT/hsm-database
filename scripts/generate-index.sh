#!/usr/bin/env bash
set -e

# Función genérica para generar index.ts con default export y namespace de tipos
# $1 = carpeta (e.g. src/oracle)
# $2 = extensión de archivo (model.ts o entity.ts)
# $3 = nombre de la export principal (models o entities)
# $4 = tipo de export principal (object o array)
generate_index() {
  DIR="$1"
  EXT="$2"
  EXPORT_NAME="$3"
  EXPORT_TYPE="$4"  # "object" o "array"
  OUT="$DIR/index.ts"

  echo "// AUTO-GENERATED — no editar a mano" > "$OUT"
  echo "" >> "$OUT"

  # 1) Imports de clases
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")                # ej. cgRefCode.model.ts
    base=${filename%."$EXT"}                        # ej. cgRefCode
    className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
    if [ "$EXT" = "model.ts" ]; then
      importName="${className}Model"
      importPath="./${base}.model"
    else
      importName="${className}"
      importPath="./${base}.entity"
    fi
    echo "import { ${importName} } from '${importPath}';" >> "$OUT"
  done

  echo "" >> "$OUT"

  # 2) Construir objeto/array y export default
  if [ "$EXPORT_TYPE" = "object" ]; then
    echo "const $EXPORT_NAME = {" >> "$OUT"
    for filepath in "$DIR"/*."$EXT"; do
      [ -e "$filepath" ] || continue
      filename=$(basename "$filepath")
      base=${filename%."$EXT"}
      className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
      if [ "$EXT" = "model.ts" ]; then
        echo "  ${className}Model," >> "$OUT"
      else
        echo "  ${className}," >> "$OUT"
      fi
    done
    echo "};" >> "$OUT"
  else
    echo "const $EXPORT_NAME = [" >> "$OUT"
    for filepath in "$DIR"/*."$EXT"; do
      [ -e "$filepath" ] || continue
      filename=$(basename "$filepath")
      base=${filename%."$EXT"}
      className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
      if [ "$EXT" = "model.ts" ]; then
        echo "  ${className}Model," >> "$OUT"
      else
        echo "  ${className}," >> "$OUT"
      fi
    done
    echo "];" >> "$OUT"
  fi

  # 3) Export default del objeto/array
  echo "export default $EXPORT_NAME;" >> "$OUT"
  echo "" >> "$OUT"

  # 4) Namespace de tipos para que models.xxx funcione en genéricos
  echo "// Namespace de tipos correspondiente al default export" >> "$OUT"
  echo "export namespace $EXPORT_NAME {" >> "$OUT"
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")
    base=${filename%."$EXT"}
    className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
    if [ "$EXT" = "model.ts" ]; then
      echo "  export type ${className}Model = import('./${base}.model').${className}Model;" >> "$OUT"
    else
      echo "  export type ${className} = import('./${base}.entity').${className};" >> "$OUT"
    fi
  done
  echo "}" >> "$OUT"
  echo "" >> "$OUT"

  echo "✅ $OUT generado"
}

# ------------- Ejecución -------------
# Genera src/oracle/index.ts con default export models y namespace de tipos
generate_index "src/oracle" "model.ts" "models" "object"

# Genera src/typeorm/index.ts con default export entities y namespace de tipos
generate_index "src/typeorm" "entity.ts" "entities" "array"

# ------------- Root barrel -------------
ROOT_OUT="src/index.ts"

echo "// AUTO-GENERATED — barrel principal" > "$ROOT_OUT"
echo "" >> "$ROOT_OUT"
echo "export { default as models }   from './oracle';" >> "$ROOT_OUT"
echo "export { default as entities } from './typeorm';" >> "$ROOT_OUT"
echo "" >> "$ROOT_OUT"
echo "✅ $ROOT_OUT generado"
