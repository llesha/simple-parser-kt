class Group {
}



data class ProcessedPart(val symbol: Char, val strategy: CharacterStrategy, val optional: Boolean = false) {
    companion object {
        fun fromString(str: String, config: Configuration): List<ProcessedPart> {
            val result = mutableListOf<ProcessedPart>()
            var i = 0
            while (i < str.length) {
                if (str[i] in config.characterStrategies.keys) {
                    val strategy = config.characterStrategies[str[i]]
                    if (strategy != CharacterStrategy.EXACT) {
                        result.add(ProcessedPart(str[i], strategy!!))
                    }
                } else {
                    config.regexStrategies.find { it.first.matches(str[i].toString()) }
                        ?.let { result.add(ProcessedPart(str[i], it.second)) }
                        ?: result.add(ProcessedPart(str[i], CharacterStrategy.EXACT))
                }
            }
            return result
        }
    }
}

class SelectionMaker(val examples: List<String>) {
    fun makeSelection(config: Configuration): Selection {
        if (config.selectionSizeDifference < 0) {

        } else {
            examples.map { it }
        }
        "".indexOf('1')
        return ExactSelection("", 0)
    }
}

abstract class Selection(val value: String, val index: Int) {
    abstract fun getSelections(text: String, strategy: PickStrategy): List<Selection>
}

// context: exact, selection: exact
// find selections, check contexts

// context: exact, selection: similar
// find contexts, for each check for similar selection (at that position)

// context: similar, selection: exact
// find selections, check context for each of them

// context: similar, selection: similar
// merge and look for them.
// transform text into this similar form and look for exact matches

class ExactSelection(value: String, index: Int) : Selection(value, index) {
    override fun getSelections(text: String, strategy: PickStrategy): List<Selection> {
        return when (strategy) {
            PickStrategy.FIRST -> {
                val index = text.indexOf(value)
                if (index == -1)
                    listOf()
                else
                    listOf(ExactSelection(value, index))
            }

            PickStrategy.ALL -> {
                value.toRegex().findAll(text).map { ExactSelection(it.value, it.range.first) }.toList()
            }

            PickStrategy.LAST -> {
                val index = text.lastIndexOf(value)
                if (index == -1)
                    listOf()
                else
                    listOf(ExactSelection(value, index))
            }
        }
    }
}

class PositionSelection(value: String, index: Int): Selection(value, index) {
    override fun getSelections(text: String, strategy: PickStrategy): List<Selection> {
        TODO("Not yet implemented")
    }

}

class SelectionContext() {}

class Configuration(
    val contextLength: Int = 10,
    val selectionSizeDifference: Int = -1,
    val characterStrategies: Map<Char, CharacterStrategy> = mapOf(
        ' ' to CharacterStrategy.SQUASH,
        '\n' to CharacterStrategy.EXACT,
    ),
    val regexStrategies: List<Pair<Regex, CharacterStrategy>> = listOf(
        Regex("[a-zA-Z]") to CharacterStrategy.SQUASH,
    )
) {

}

enum class PickStrategy {
    FIRST,
    ALL,
    LAST
}

enum class SelectionStrategy {
    EXACT,
    SIMILAR,
    POSITION
}

enum class CharacterStrategy {
    IGNORE,
    SQUASH,
    EXACT
}