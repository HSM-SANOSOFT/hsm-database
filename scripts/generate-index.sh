#!/usr/bin/env bash
set -e

# Función genérica para generar index.ts con named export y namespace merging
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

  # Imports de clases
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")
    base="${filename%.$EXT}"
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

  # Export principal como named const
  if [ "$EXPORT_TYPE" = "object" ]; then
    echo "export const $EXPORT_NAME = {" >> "$OUT"
  else
    echo "export const $EXPORT_NAME = [" >> "$OUT"
  fi
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")
    base="${filename%.$EXT}"
    className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
    entryName="$([ "$EXT" = "model.ts" ] && echo "${className}Model" || echo "${className}")"
    echo "  ${entryName}," >> "$OUT"
  done
  if [ "$EXPORT_TYPE" = "object" ]; then
    echo "};" >> "$OUT"
  else
    echo "];" >> "$OUT"
  fi

  echo "" >> "$OUT"

  # Namespace merging para que models.<ClassName>Model sirva en type-space usando InstanceType
  echo "export namespace $EXPORT_NAME {" >> "$OUT"
  for filepath in "$DIR"/*."$EXT"; do
    [ -e "$filepath" ] || continue
    filename=$(basename "$filepath")
    base="${filename%.$EXT}"
    className="$(tr '[:lower:]' '[:upper:]' <<< "${base:0:1}")${base:1}"
    if [ "$EXT" = "model.ts" ]; then
      echo "  export type ${className}Model = InstanceType<typeof ${EXPORT_NAME}.${className}Model>;" >> "$OUT"
    else
      echo "  export type ${className} = InstanceType<typeof ${EXPORT_NAME}[number]>;" >> "$OUT"
    fi
  done
  echo "}" >> "$OUT"
  echo "" >> "$OUT"

  echo "✅ $OUT generado"
}

# Generar índices en subcarpetas
generate_index "src/oracle"   "model.ts"  "models"   "object"
generate_index "src/typeorm"  "entity.ts" "entities" "array"

# Barrel principal limpio
ROOT_OUT="src/index.ts"

echo "// AUTO-GENERATED — barrel principal" > "$ROOT_OUT"
echo "" >> "$ROOT_OUT"
echo "export { models }   from './oracle';" >> "$ROOT_OUT"
echo "export { entities } from './typeorm';" >> "$ROOT_OUT"
echo "" >> "$ROOT_OUT"
echo "✅ $ROOT_OUT generado"
