plugins {
    kotlin("multiplatform") version "1.8.10"
}

group = "llesha.parse"
version = "0.5"

repositories {
    mavenLocal()
    mavenCentral()
}

kotlin {
    jvm {
        jvmToolchain(17)
        withJava()
    }
    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(false)
                }
            }
            webpackTask {
                output.libraryTarget = "commonjs2"
                destinationDirectory = file("../site/js/interpreter")
            }
//            distribution {
//                directory = file("../site")
//            }
        }
        binaries.executable()
    }
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jvmMain by getting
        val jvmTest by getting
        val jsMain by getting
        val jsTest by getting
    }
}