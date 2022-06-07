# List To Text

Display a single text concatenated from a list of objects.

## Usage

1. Configure data source.
2. Configure `Display value` expression to be taken from a data source object, that will be concatenated to a text.
3. Set `separator` - text used to separate `display value` of each object from data source.
4. Choose `render mode` from available selection.

Optionally:
5. Set limit of retrieved objects.
6. Set `sufix` and `prefix`.
7. Set `fallback text` when provided list will be empty.
Note: `fallback text` is separated from `sufix` and `prefix` - in case data source will return no objects, only fallback text will be displayed.