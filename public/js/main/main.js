let Rec = 0;//кол-во записей на странице

function OnClickRow(id){//нажатие на какую либо строку
    const Form = document.getElementById('Form');
    const Frame = document.getElementById('Frame');

    //Если включен режим редактирования позиции
    if(!Form.classList.contains('FormActive')){
        const ParametrsDivOld = document.getElementById('ParametrsDiv')
        //Если панель параметров найдена
        Form.classList.add('FormActive');//установка флага активной панели
        if(ParametrsDivOld != undefined){
            const ParametrsDiv = document.createElement('div');
            ParametrsDivOld.remove(); //удаление панели параметров
            ParametrsDiv.id = "ParametrsDiv";
            ParametrsDiv.className = "ParametrsDiv";
            //Генерирование панели параметров
            GenerateParametrsDiv(Frame, ParametrsDiv, id);
            //удаление флага активной панели
            Form.classList.remove('FormActive');
        }
    }else{
        const ParametrsDiv = document.createElement('div');
        ParametrsDiv.id = "ParametrsDiv";
        ParametrsDiv.className = "ParametrsDiv";
        //Генерирование панели параметров
        GenerateParametrsDiv(Frame, ParametrsDiv, id)
        //удаление флага активной панели
        Form.classList.remove('FormActive');
    }

    
}
function OnClickAddNewRec(){//создание новой записи
    const Tr = document.createElement('tr');
    const Table = document.getElementById('Table');
    
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
function OnClicCancelRec(){
    const Form = document.getElementById('Form');
    const ParametrsDivOld = document.getElementById('ParametrsDiv');

    Form.classList.add('FormActive');//установка флага активной панели
    ParametrsDivOld.remove();
}
function GenerateParametrsDiv(Frame, ParametrsDiv, id){//генерирование панели параметров
    ParametrsDiv.innerHTML = "<div class=\"LabelForm\" id=\"ParametrsLabel\">" +
    "\n     <div class = \"ImgCloseParamDiv\"><img src=\"../source/image/main/close.png\" width=\"16px\" title=\"закрыть панель\" onclick=\"OnClicCancelRec()\"></div>" +
    "\n     Параметры позиции</div>" +
    "\n  <dic class=\"InputPanel\">" +
    "\n       <label class=\"LabelInput\">Имя позиции<input type=\"text\" class=\"InputParametrs\" id=\"NameInput\"></label>" +
    "\n       <label class=\"LabelInput\">Идентификатор позиции <label class=\"NecessarilyLabel\">*</label><input type=\"text\" class=\"InputParametrs\" id=\"IdInput\"></label>" +
    "\n       <label class=\"LabelInput\">Количество <label class=\"NecessarilyLabel\">*</label><input type=\"number\" class=\"InputParametrs\" id=\"CountInput\"></label>" +
    "\n       <label class=\"LabelInput\">Базовая цена <br /> (цена покупки позиции) <label class=\"NecessarilyLabel\">*</label><input type=\"number\" class=\"InputParametrs\" id=\"PurchasePriceInput\"></label>" +
    "\n       <label class=\"LabelInput\">Брокер<input type=\"text\" class=\"InputParametrs\" id=\"BrokerInput\"></label>" +
    "\n       <label class=\"LabelInput\">Комиссия брокера (%)<input type=\"number\" class=\"InputParametrs\" id=\"BrokersCommisionInput\"></label>" +
    "\n       <label class=\"LabelInput\">Валюта <label class=\"NecessarilyLabel\">*</label><select class=\"InputParametrs\" id=\"CurrencyInput\">" +
    "\n               <option>RUB</option>" +
    "\n               <option>USD</option>" +
    "\n               <option>EUR</option>" +
    "\n           </select>" +
    "\n       </label>" +
    "\n       <label class=\"LabelInput\">Категория<input type=\"text\" class=\"InputParametrs\" id=\"CategoryInput\"></label>" +
    "\n       <label class=\"LabelInput\">Класс актива <label class=\"NecessarilyLabel\">*</label><select class=\"InputParametrs\" id=\"ClassInput\">" + 
    "\n           <option>Акция</option>" +
    "\n           <option>Облигация</option>" +
    "\n           <option>Фонд(ПИФ)</option>" +
    "\n       </select>" +
    "\n   </label>" +
    "\n   <div id=\"BtnActDiv\" class=\"BtnActDiv\">" +
    "\n      <div class=\"btnAct\" id=\"BtnEdit\" onclick=\"OnClickAddNewRec('" + id + "')\">Сохранить</div>" +
    "\n      <div class=\"btnAct\" id=\"BtnRemove\" onclick=\"OnClicCancelRec()\">Отменить</div>" +
    "\n      <div class=\"btnAct\" id=\"BtnRemove\" onclick=\"OnClicRemoveRec('" + id + "')\">Удалить</div>" +
    "\n   </div>" +
    "\n   </div>";

    Frame.append(ParametrsDiv);
}