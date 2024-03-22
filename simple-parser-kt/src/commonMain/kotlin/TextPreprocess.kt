class TextPreprocess(val text: String) {
    fun process(context: ProcessContext): String {
        var result = text
        if(context.caseSensitive) {
            result = result.lowercase()
        }
        return result
    }
}

class ProcessContext(val caseSensitive: Boolean)