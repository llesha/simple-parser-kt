object Utils {
    fun longestCommonSubstring(strings: List<String>): String {
        val shortest = strings.min()
        if (strings.all { it.contains(shortest) })
            return shortest
        for (i in shortest.lastIndex downTo 1) {
            val leftSubstring = shortest.substring(0, i)
            if (strings.all { it.contains(leftSubstring) })
                return leftSubstring
        }
        for (i in 0 until shortest.lastIndex) {
            val rightSubstring = shortest.substring(i, shortest.length)
            if (strings.all { it.contains(rightSubstring) })
                return rightSubstring
        }
        return ""
    }
}