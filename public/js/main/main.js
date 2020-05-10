var Rec = 0;//кол-во записей на странице

function OnClickRow(id){//нажатие на какую либо строку
    let Tr = document.getElementById(id);
    
    if(Tr.classList.contains('active')){//если на строку уже нажимали ранее
        if(document.getElementById('BtnActDiv') != undefined){//если на форме уже есть кнопки с редактированием и удалением записей
            document.getElementById('BtnActDiv').remove();//удалить кнопки
        }
        let rows = document.getElementsByTagName('tr');
        for(let i = 0; i < rows.length; i++){//цикл по всем строкам
            if(rows[i].classList.contains('active')){//если строка активна
                rows[i].classList.remove('active')//удалить флаг
            }
        }
        Tr.classList.remove('active');//удалить флаг

    }else{//если ранее не нажимали
        if(document.getElementById('BtnActDiv') != undefined){//если на форме уже есть кнопки с редактированием и удалением записей
            let rows = document.getElementsByTagName('tr');
            for(let i = 0; i < rows.length; i++){//цикл по всем строкам
                if(rows[i].classList.contains('active')){//если строка активна
                    rows[i].classList.remove('active')//удалить флаг
                }
            }
            document.getElementById('BtnActDiv').remove();//удалить кнопки
            
        }else{
            let DivButton = document.createElement('div');//создание нового элемента с кнопками
            let Frame = document.getElementById('Frame');
            DivButton.id = 'BtnActDiv';
            DivButton.className = 'DivButton';
            //добавление кнопок
            DivButton.innerHTML = "<div class=\"btnAct\" id=\"BtnEdit\"  onclick=\"OnClickAddNewRec(\"" + id + "\")\">Редактировать запись</div>" +
                                "<div class=\"btnAct\" id=\"BtnRemove\" onclick=\"OnClickAddNewRec(\"" + id + "\")\">Удалить запись</div>";

            Tr.classList.add('active');
            Frame.before(DivButton);
        }
        
    }
}
function OnClickAddNewRec(){//создание новой записи
    let Tr = document.createElement('tr');
    let Table = document.getElementById('Table');
    
    Rec++;
    Tr.id = "Rec_" + Rec;
    Tr.setAttribute('onclick','OnClickRow(id)');
    Tr.innerHTML = "<td class=\"Value\"  id = \"Rec_" + Rec +"_1\"></td>" +  // добавление новой строки
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_2\" ></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_3\" ></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_4\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_5\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_6\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_7\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_8\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_9\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_10\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_11\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_5\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_6\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_7\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_8\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_9\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_10\"></td>" + 
                    "<td class=\"Value\" id = \"Rec_" + Rec +"_11\"></td>";

    Table.append(Tr);
}