//// GUI setting ////var win = new Window('palette', 'window');var btn_update = win.add('button', undefined, '更新');var group2 = win.add('group', undefined, ''); var label_timesheet = group2.add('statictext', undefined, 'タイムシート');var filepath_text;if (Folder.fs == "Windows") filepath_text = "C:\\Documents and Settings\\username\\Desktop\\";else filepath_text = "~/desktop/";var filepath = group2.add("edittext",undefined,filepath_text);filepath.characters = 15;var btnChange = group2.add('button', undefined, '変更');var myList = new Array;var myList2 = new Array;//alert(app.project.items.length);for (var i=1; i<=app.project.items.length; i++) {    if (app.project.item(i) instanceof CompItem) {        myList[myList.length] = app.project.item(i).name;    }    else if (app.project.item(i) instanceof FolderItem) {        myList2[myList2.length] = app.project.item(i).name;    }}var group = win.add('group', undefined, 'Group title');  var label1 = group.add('statictext', undefined, "Target Comp:"); var dropDownList = group.add('dropdownlist', undefined, myList);dropDownList.selection = 0;var group_folderlist = win.add('group', undefined, 'Group title');  var label2 = group_folderlist.add('statictext', undefined, "Target Folder:"); var dropDownList2 = group_folderlist.add('dropdownlist', undefined, myList2);dropDownList2.selection = 0;var btnSelect = win.add('button', undefined, 'Run');function updateList (list, type){    var myList = new Array;    for (var i=1; i<=app.project.items.length; i++) {    if (app.project.item(i) instanceof type) {        myList[myList.length] = app.project.item(i).name;    }    }    list.removeAll();    for (i=0; i<myList.length; i++) list.add("item", myList[i]);    list.selection = 0;}btn_update.onClick = function runUpdateList(){    updateList(dropDownList, CompItem);    updateList(dropDownList2, FolderItem);}btnChange.onClick = function openFileDirectory() {    //var saveLoc = Folder.selectDialog ("Select Save Location").toString();    var openPath = File.openDialog("タイムシートを選択してください","");    if (Folder.fs == "Windows"){        //filepath.text = saveLoc + "\\";    }else{        //filepath.text = saveLoc + "/";    }    filepath.text = openPath;}win.center();win.show();