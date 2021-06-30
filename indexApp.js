function changeFilter(){
    let prevFilter, nextFilter
    prevFilter = tree.classList[tree.classList.length - 1]
    switch(prevFilter){
        case "tree-filter-none":{
            nextFilter = "tree-filter-blur"
            break
        }
        case "tree-filter-blur":{
            nextFilter = "tree-filter-grayscale"
            break
        }
        case "tree-filter-grayscale":{
            nextFilter = "tree-filter-hue"
            break
        }
        case "tree-filter-hue":{
            nextFilter = "tree-filter-none"
            break
        }
    }
    tree.classList.remove(prevFilter)
    tree.classList.add(nextFilter)

}
function changeFlexDir(target){
    if(flexDirCon.style.flexDirection === ""){
        flexDirCon.style.flexDirection = "column"
        target.innerText = "Колонка"
    }
    else {
        flexDirCon.style.flexDirection = ""
        target.innerText = "Столбец"
    }
}
function formToggle(){
    if(document.querySelector("#formSection").childNodes.length == 5){
        let form = document.createElement("form"),
            p = document.createElement("p"),
            label = document.createElement("label"),
            input = document.createElement("input"),
            submitInput = document.createElement("input")
        
        p.innerText = "Подпишись на рассылку новостей, чтобы узнавать первым."
        submitInput.type = "submit"
        submitInput.classList.add("btn")
        input.id = "formInput"
        input.classList.add("mx-3")
        label.for = "formInput"
        label.innerText = "Ваш Email"
        form.append(p,label,input,submitInput)
        document.querySelector("#formSection").append(form)
        document.querySelector("#formCreator").style.display = "none"
    }
}