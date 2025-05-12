#!/usr/bin/env bash
set -e

# Función genérica para generar index.ts con default export
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

  # 1) Imports
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")                # e.g. cgRefCode.model.ts
    base=${filename%."$EXT"}                        # e.g. cgRefCode
    # CamelCase para la clase
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

  # 2) Definir const y export default
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

  echo "export default $EXPORT_NAME;" >> "$OUT"
  echo "" >> "$OUT"

  # 3) Named exports individuales
  echo "// Named exports" >> "$OUT"
  echo "export {" >> "$OUT"
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

  echo "✅ $OUT generado"
}

# Genera src/oracle/index.ts con default export models (objeto)
generate_index "src/oracle" "model.ts" "models" "object"

# Genera src/typeorm/index.ts con default export entities (array)
generate_index "src/typeorm" "entity.ts" "entities" "array"
