export const bookReducers = (state, action) => {
   switch(action.type){
       case "Add_Book":
           return [...state, {
               title: action.book.title,
               author: action.book.author,
               id: Math.floor((Math.random() * 100) + 1)
           }]
       case "Remove_Book":
            return state.filter(book => book.id !== action.id);
       default: 
            return state;
   }
}