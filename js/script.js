/*
*
*
* MENU MOBILE
*
*
*/
var menu_mobile_Open = false;
const menu_mobile = document.querySelector("#menu-mobile");
const button_menu_mobile = document.querySelector("#button-menu-mobile");
button_menu_mobile.addEventListener('click', (e) =>{
	if(!menu_mobile_Open){
		menu_mobile.style.display = "flex";
		button_menu_mobile.innerHTML = "<i class='bx bx-x'></i>";
	} else {
		menu_mobile.style.display = "none";
		button_menu_mobile.innerHTML = "<i class='bx bx-menu'></i>";
	}
	menu_mobile_Open = !menu_mobile_Open;
})

// menu_mobile.addEventListener('click', (e) =>{
// 	menu_mobile.style.display = "none";
// 	button_menu_mobile.innerHTML = "<i class='bx bx-menu'></i>";
// 	menu_mobile_Open = false;
// })
/*
*
*
* PROJECTOS
*
*
*/
const my_projects_data = [];

new_project('Green Store', "Loja virtual (responsiva). Desenvolvida em: HTML, CSS, JS", "assets/project/green-store-responsivo.png", "github.sem")

function new_project(name, description, image, github){
	my_projects_data.push({
		name:name,
		description:description,
		image:image,
		github:github
	})
}

const element_container_projects = document.querySelector('#container-projects');
function render_my_projects(){
	element_container_projects.innerHTML = ''
	my_projects_data.forEach((projectid, index) =>{
		element_container_projects.innerHTML += `
		<div class="project">
			<img src="${projectid.image}">
			<div class="title">${projectid.name}</div>
			<div class="button-box-ver">
				<button onclick="show_modal_project(${index})">Ver</button>
			</div>
		</div>`;

	})
}
render_my_projects();
/*
*
*
* MODAL PROJECT
*
*
*/
const janela_modal_project      = document.querySelector("#janela-modal-project");
const modal_project_name        = document.querySelector("#modal-project-name");
const modal_project_image       = document.querySelector("#modal-project-image");
const modal_project_description = document.querySelector("#modal-project-description .description");
const modal_project_github        = document.querySelector("#modal-project-github");

function show_modal_project(id){

	const projectid = my_projects_data[id];
	// janela modal
	janela_modal_project.style.display = "block";
	// name
	modal_project_name.innerHTML = projectid.name;
	// description
	modal_project_description.innerHTML = projectid.description;
	// image
	modal_project_image.src = projectid.image;
	// link
	modal_project_github.href = projectid.github;
}

function hide_modal_project(){
	janela_modal_project.style.display = "none";
}

janela_modal_project.addEventListener('click', (e) =>{
	if(e.target.id == 'janela-modal-project'){
		hide_modal_project();
	}
})