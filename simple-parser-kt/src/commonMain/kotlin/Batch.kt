abstract class Batch(val size: Int)

class SymbolBatch(val symbol: String, size: Int): Batch(size)
class RegexBatch(val regex: Regex, size: Int): Batch(size)