export default {
    name:'breadcrumb',
    title:'BreadCrumb',
    type:'document',

    fields:[{
        name:'productcategory',
        title:'Product Category',
        type:'string',
    },
    {
        name:'path',
        title:'Path',
        type:'slug', 
        options:{
            source:'productcategory',
            maxLength:100,
       }
    }]
}