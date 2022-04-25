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
_c.set("appHost", "127.0.0.1")
_c.set("appPort", 4000)
_c.set("secure", true)
_c.set("db", {
  "type":"gestor_db",
  "host":"127.0.0.1" 
})
```
# Return
```typescript
{
	"appTitle": "Kjsh",
	"appHost": "127.0.0.1",
	"appPort": 4000,
	"secure": true,
	"db": {
		"type": "gestor_db",
		"host": "127.0.0.1"
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
_c.delete("appTitle")
```
