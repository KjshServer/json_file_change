# json_file_change v1.0.0
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
insert or update data in file json file<br>
Maximum sub keys object <br>
Maximum arrays and objects within an array 1<br>
IMPORTANT: do not manually edit the file json use set
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
console.log(_c.get("keyString", "Other value optional if not exist")) // "string"
console.log(_c.get("keyNumber", "Other value optional if not exist")) // 1
console.log(_c.get("keyBoolean", "Other value optional if not exist")) // true
console.log(_c.get("keyObject", "Other value optional if not exist")) // object{}
console.log(_c.get("keyObject.subKeyString", "Other value optional if not exist")) // "string"
console.log(_c.get("keyObject.subKeyNumber", "Other value optional if not exist")) // 1
console.log(_c.get("keyObject.subKeyBoolean", "Other value optional if not exist")) // true
console.log(_c.get("keyObject.subKeyArray", "Other value optional if not exist")) // array[]
console.log(_c.get("keyObject.subKeyArray[0].subKeyString", "Other value optional if not exist")) // "string"
console.log(_c.get("keyObject.subKeyArray[0].subKeyNumber", "Other value optional if not exist")) // 1
console.log(_c.get("keyObject.subKeyArray[0].subKeyBoolean", "Other value optional if not exist")) // "Other value optional if not exist"
console.log(_c.get("keyObject.subKeyArray[0].subKeyObject", "Other value optional if not exist")) // object{}
console.log(_c.get("keyObject.subKeyArray[0].subKeyObject.subKeyString", "Other value optional if not exist")) // "string"
console.log(_c.get("keyObject.subKeyArray[0].subKeyObject.subKeyNumber", "Other value optional if not exist")) // 1
console.log(_c.get("keyObject.subKeyArray[0].subKeyObject.subKeyBoolean", "Other value optional if not exist")) // true
console.log(_c.get("keyObject.subKeyObject", "Other value optional if not exist")) // object{}
console.log(_c.get("keyObject.subKeyObject.subKeyString", "Other value optional if not exist")) // "string"
console.log(_c.get("keyObject.subKeyObject.subKeyNumber", "Other value optional if not exist")) // 1
console.log(_c.get("keyObject.subKeyObject.subKeyBoolean", "Other value optional if not exist")) // true
console.log(_c.get("keyObject.subKeyObject.subKeyArray", "Other value optional if not exist")) // array[]
console.log(_c.get("keyObject.subKeyObject.subKeyArray[0].subKeyString", "Other value optional if not exist")) // "string"
console.log(_c.get("keyObject.subKeyObject.subKeyArray[0].subKeyNumber", "Other value optional if not exist")) // 1
console.log(_c.get("keyObject.subKeyObject.subKeyArray[0].subKeyBoolean", "Other value optional if not exist")) // "Other value optional if not exist"
console.log(_c.get("keyObject.subKeyArray[0]", "Other value optional if not exist")) // Other value optional if not exist

console.log(_c.get("keyObject.subKeyObject.subKeyArray[0].subKeyBoolean")) // "" is false
console.log(_c.get("keyString1", "Other value optional if not exist")) // Other value optional if not exist
console.log(_c.get("keyString1", "Other value optional if not exist")) // ""
```
# Return
if exist return = value<br>
if not exist or is false return = Other title optional if not exist"

# Delete
Delete key if exist
```typescript
_c.delete("keyString")
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
_c.delete("keyObject.subKeyArray[0]") // error would be null
```
# Return
Delete key subKeys object subObjects array subArrays
