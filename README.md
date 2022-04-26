# JsonFileChange v1.0.0
Module for deno, load, set, get and delete content of json file

# Import
```typescript
import { _c } from "https://deno.land/x/json_file_change@1.0.0/mod.ts"
```

# Load
If the json file does not exist it creates it automatically
```typescript
_c.load(`${Deno.cwd()}/src/config/config.json`)
```

# Set
insert or update data in json file
Maximum sub keys object 2br>
Maximum arrays and objects within an array 1
```typescript
_c.set("keyString", "string")
_c.set("keyNumber", 1)
_c.set("keyBoolean", true)
_c.set("keyObject", {
	"subKeyString": "string",
	"subKeyNumber": 1,
	"subKeyBoolean": true,
	"subKeyArray": [
		{
			"subKeyString": "string",
			"subKeyNumber": 1,
			"subKeyBoolean": false,
			"subKeyObject": {
				"subKeyString": "string",
				"subKeyNumber": 1,
				"subKeyBoolean": true,
			}
		}
	],
	"subKeyObject": {
		"subKeyString": "string",
		"subKeyNumber": 1,
		"subKeyBoolean": true,
		"subKeyArray": [
			{
				"subKeyString": "string",
				"subKeyNumber": 1,
				"subKeyBoolean": false,
			}
		],
	}
})

```
# Return
```json
{
	"keyString": "string",
	"keyNumber": 1,
	"keyBoolean": true,
	"keyObject": {
		"subKeyString": "string",
		"subKeyNumber": 1,
		"subKeyBoolean": true,
		"subKeyArray": [
			{
				"subKeyString": "string",
				"subKeyNumber": 1,
				"subKeyBoolean": false,
				"subKeyObject": {
					"subKeyString": "string",
					"subKeyNumber": 1,
					"subKeyBoolean": true
				}
			}
		],
		"subKeyObject": {
			"subKeyString": "string",
			"subKeyNumber": 1,
			"subKeyBoolean": true,
			"subKeyArray": [
				{
					"subKeyString": "string",
					"subKeyNumber": 1,
					"subKeyBoolean": false
				}
			]
		}
	}
}
```

# Get
Get key if it exists and if it doesn't exist, optional you can return a temporary value
```typescript
console.log(_c.get("appTitle", "Other value optional if not exist"))
console.log(_c.get("otherKey", "Other value optional if not exist"))
```
# Return
Kjsh<br>
Other title optional if not exist"

# Delete
Delete key if exist
```typescript
_c.delete("keyString") // :heavy_check_mark:
_c.delete("keyNumber")
_c.delete("keyBoolean")
_c.delete("keyObject")
_c.delete("keyObject.subKeyString")
_c.delete("keyObject.subKeyNumber")
_c.delete("keyObject.subKeyBoolean")
_c.delete("keyObject.subKeyArray")
_c.delete("keyObject.subKeyArray[0].subKeyString")
_c.delete("keyObject.subKeyArray[0].subKeyNumber")
_c.delete("keyObject.subKeyArray[0].subKeyBoolean")
_c.delete("keyObject.subKeyArray[0].subKeyObject")
_c.delete("keyObject.subKeyArray[0].subKeyObject.subKeyString")
_c.delete("keyObject.subKeyArray[0].subKeyObject.subKeyNumber")
_c.delete("keyObject.subKeyArray[0].subKeyObject.subKeyBoolean")
_c.delete("keyObject.subKeyObject")
_c.delete("keyObject.subKeyObject.subKeyString")
_c.delete("keyObject.subKeyObject.subKeyNumber")
_c.delete("keyObject.subKeyObject.subKeyBoolean")
_c.delete("keyObject.subKeyObject.subKeyArray")
_c.delete("keyObject.subKeyObject.subKeyArray[0].subKeyString")
_c.delete("keyObject.subKeyObject.subKeyArray[0].subKeyNumber")
_c.delete("keyObject.subKeyObject.subKeyArray[0].subKeyBoolean")
_c.delete("keyObject.subKeyArray[0]") 
```
# Return
Delete key subKeys object subObjects array subArrays
