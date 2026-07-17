function SetWelcomingUserText(username) {
    var name = username || "user";

    WelcomingText.setText("Hello " + name + " 👋");
}