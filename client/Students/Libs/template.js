'use strict';
function liTemplate (entity) {
    var newLi;
               
    newLi = ':name :lastName<button class="deleteButton">х</button>'; 

    return replaceKeys(newLi, entity);
}

function detailsTemplate (entity) {
	var newLiDetails;
        
    newLiDetails = `<ul class="ulDetails">
                        <li class="liDetails">Name: :name</li>
                        <li class="liDetails">Last Name: :lastName</li>
                        <li class="liDetails">Gender: :gender</li>
                        <li class="liDetails">Skype: :skype</li>
                    </ul>
                    <button class="edit">Edit</button>`;

    return replaceKeys(newLiDetails, entity);
}

function editTemplate (entity) {
    var newLiEditableDetails;
        
    newLiEditableDetails = `<ul class="ulEditibleDetails">
                                <li class="liEditibleDetails">
                                   Name:<input type="text" name="name" value=":name">
                                </li> 
                                 <li class="liEditibleDetails">
                                   Last Name:<input type="text" name="lastName" value=":lastName"
                                </li>
                                 <li class="liEditibleDetails">
                                   Gender:<input type="text" name="gender" value=":gender">
                                </li>
                                 <li class="liEditibleDetails">
                                   Skype:<input type="text" name="skype" value=":skype"></li>
                                </li>
                            </ul>
                            <button class="save">Save</button>`;

    return replaceKeys(newLiEditableDetails, entity);
}

function replaceKeys (htmlString, entity) {
    var key,
        tpl;

    for (key in entity) {
        tpl = ':' + key; 
        htmlString = htmlString.replace(tpl, entity[key])
    }
    return htmlString; 
}