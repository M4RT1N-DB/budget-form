export const exportBudget=(budget:number,reamingBudget:number)=>{
    let newClass:string='';
    if ((budget/4)>=reamingBudget) {
         newClass='left25';
    }else{
        if ((budget/2)>=reamingBudget) {
             newClass='left50';
        }else{
             newClass='left100';
        }
    }
    return newClass;
};