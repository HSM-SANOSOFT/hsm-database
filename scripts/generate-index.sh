#!/usr/bin/env bash
set -e

# Función genérica para generar index.ts con named export y namespace de tipos
# $1 = carpeta (ej. src/oracle)
# $2 = extensión de archivo (model.ts o entity.ts)
# $3 = nombre de la export principal (models o entities)
# $4 = tipo de export principal (object o array)
generate_index() {
  DIR="$1"
  EXT="$2"
  EXPORT_NAME="$3"
  EXPORT_TYPE="$4"
  OUT="$DIR/index.ts"

  echo "// AUTO-GENERATED — no editar a mano" > "$OUT"
  echo "" >> "$OUT"

  # Imports
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")
    base=${filename%."$EXT"}
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

  # Export principal
  if [ "$EXPORT_TYPE" = "object" ]; then
    echo "export const $EXPORT_NAME = {" >> "$OUT"
  else
    echo "export const $EXPORT_NAME = [" >> "$OUT"
  fi
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")
    base=${filename%."$EXT"}
    className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
    entryName=$(("$EXT" == "model.ts") && echo "${className}Model" || echo "${className}")
    echo "  ${entryName}," >> "$OUT"
  done
  if [ "$EXPORT_TYPE" = "object" ]; then
    echo "};" >> "$OUT"
  else
    echo "];" >> "$OUT"
  fi

  echo "" >> "$OUT"

  # Namespace de tipos
  echo "// Namespace de tipos correspondiente a la export" >> "$OUT"
  echo "export namespace $EXPORT_NAME {" >> "$OUT"
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")
    base=${filename%."$EXT"}
    className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
    if [ "$EXT" = "model.ts" ]; then
      echo "  export type ${className}Model = typeof ${className}Model;" >> "$OUT"
    else
      echo "  export type ${className} = typeof ${className};" >> "$OUT"
    fi
  done
  echo "}" >> "$OUT"
  echo "" >> "$OUT"

  echo "✅ $OUT generado"
}

# Genera índice para models y entities
generate_index "src/oracle"   "model.ts"  "models"   "object"
generate_index "src/typeorm" "entity.ts" "entities" "array"

# Barrel principal dinámico\ nROOT_OUT="src/index.ts"

echo "// AUTO-GENERATED — barrel principal" > "$ROOT_OUT"
echo "" >> "$ROOT_OUT"
# Importamos named export 'models' de oracle
echo "import { models } from './oracle';" >> "$ROOT_OUT"
echo "" >> "$ROOT_OUT"
# Creamos const y namespace según tu petición
echo "export const model = models" >> "$ROOT_OUT"
echo "export namespace model {" >> "$ROOT_OUT"
echo "  export type models = typeof models" >> "$ROOT_OUT"
echo "}" >> "$ROOT_OUT"
echo "" >> "$ROOT_OUT"
echo "✅ $ROOT_OUT generado"
