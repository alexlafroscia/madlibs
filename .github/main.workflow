workflow "Build and Test" {
  resolves = ["Run Tests", "Build through Pika"]
  on = "push"
}

action "Install Dependencies" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Run Tests" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install Dependencies"]
  args = "test"
}

action "Build through Pika" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install Dependencies"]
  args = "build"
}
