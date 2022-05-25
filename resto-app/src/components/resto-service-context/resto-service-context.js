import React from "react";
import RestoService from "../../services/resto-service";

const restoService = new RestoService()

// Контекст - это храниище, в которое можно поместить данные, а затем, когда компоненту или чему-то еще
// они понадобятся, то просто достать их от туда.
// Главный плюс в том, что при таком подходе не нужно передавать какой-то объект по всем компонентам, если он нужен
// только внутреннему.
const RestoServiceContext = React.createContext(restoService);

export default RestoServiceContext