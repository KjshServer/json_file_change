// deno-lint-ignore-file no-explicit-any

let fileConfig = globalThis as any

// module for Deno
export const _c = {
	load: (path: string) => {
		fileConfig = path.replaceAll("\\", "/")

		if (!fileConfig) {
			console.log("[ERROR] File path is empty")
		} else if (!fileConfig.endsWith(".json")) {
			console.log("[ERROR] File path is not json")
		} else {
			try {
				const fileContent = Deno.readTextFileSync(fileConfig)
				const fileJson = JSON.parse(fileContent)
				const result = Deno.writeTextFileSync(fileConfig, JSON.stringify(fileJson, null, "\t"))
				return result
			} catch (error) {
				const errorMessage = `${error.name}: ${error.message}`
				if (errorMessage.includes("No such file or directory")) {
					Deno.createSync(fileConfig)
					Deno.writeTextFileSync(fileConfig, "{}")
					return _c.load
				} else if (errorMessage.includes("Unexpected end of JSON input")) {
					Deno.writeTextFileSync(fileConfig, "{}")
					return _c.load
				} else {
					console.log(`[Error] ${errorMessage}`)
				}
			}
		}
	},

	set: (str: any, _value: any) => {
		if (fileConfig && fileConfig.endsWith(".json")) {
			const fileContent = Deno.readTextFileSync(fileConfig)
			const fileJson = JSON.parse(fileContent)

			try {
				if (!str.endsWith("]")) {
					eval(`fileJson.${str} = _value`)
					Deno.writeTextFileSync(fileConfig, JSON.stringify(fileJson, null, "\t"))
				} else {
					console.log("[ERROR] would be null")
				}
			} catch (error) {
				const errorMessage = `${error.name}: ${error.message}`
				if (errorMessage.includes("Cannot read properties of undefined")) {
					console.log(`[ERROR] Key "${str}" does not exist`)
				} else {
					console.log(`[Error] ${errorMessage}`)
				}
			}
		}
	},

	get: (str: string, optionalValue?: any) => {
		if (fileConfig && fileConfig.endsWith(".json")) {
			const fileContent = Deno.readTextFileSync(fileConfig)
			let fileJson = JSON.parse(fileContent)

			try {
				if (!str.endsWith("]")) {
					fileJson = eval(`fileJson.${str}`)

					return fileJson || optionalValue || ""
				} else {
					return optionalValue || ""
				}
			} catch (_) {
				return optionalValue || ""
			}
		} else {
			return optionalValue || ""
		}
	},

	delete: (str: string) => {
		if (fileConfig && fileConfig.endsWith(".json")) {
			const fileContent = Deno.readTextFileSync(fileConfig)
			const fileJson = JSON.parse(fileContent)

			try {
				if (!str.endsWith("]")) {
					eval(`delete fileJson.${str}`)
					Deno.writeTextFileSync(fileConfig, JSON.stringify(fileJson, null, "\t"))
				} else {
					console.log("[ERROR] would be null")
				}
			} catch (error) {
				const errorMessage = `${error.name}: ${error.message}`
				if (errorMessage.includes("Cannot read properties of undefined")) {
					console.log(`[ERROR] Key "${str}" does not exist`)
				} else {
					console.log(`[Error] ${errorMessage}`)
				}
			}
		}
	}
}
