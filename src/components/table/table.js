import React, {Component} from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <> 
                <table width="100%" cellpadding="5" id="Table">
                    <col className="col1" />
                    <col className="col2" />
                    <col className="col3" />
                    <col className="col4" />
                    <col className="col5" />
                    <col className="col6" />
                    <col span="9" className="coln" />
                    <tr>
                        <th className="Label" class="col1">Имя</th>
                        <th className="Label">Идентификатор</th>
                        <th className="Label">Цена</th>
                        <th className="Label">Количество</th>
                        <th className="Label">Базовая цена</th>
                        <th className="Label">Рыночная цена</th>
                        <th className="Label">Прибыль/ убыток</th>
                        <th className="Label">Прибыль/ убыток (%) </th>
                        <th className="Label">Ожидаемая доходность (%) </th>
                        <th className="Label">Ср. ежемес. доход </th>
                        <th className="Label">Дата поступления дивидендов</th>
                        <th className="Label">Размер поступления дивидендов</th>
                        <th className="Label">Комиссия (%)</th>
                        <th className="Label">Валюта</th>
                        <th className="Label">Брокер</th>
                        <th className="Label">Дата покупки</th>
                        <th className="Label">Категория</th>
                        <th className="Label">Класс актива</th>
                    </tr>
                </table>
            </>
        );
    }
}