function addUser(){
    player_1_name = document.getElementById("player_1_name_input").innerHTML;
    player_2_name = document.getElementById("player_2_name_input").innerHTML;
    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);
    window.location = "quiz_game_page.html";
}