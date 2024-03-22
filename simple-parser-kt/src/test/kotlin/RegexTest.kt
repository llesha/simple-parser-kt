import kotlin.test.Test

class RegexTest {
    @Test
    fun test() {
        assert("фбвгд".matches(Regex("[а-я]+")))
    }

}