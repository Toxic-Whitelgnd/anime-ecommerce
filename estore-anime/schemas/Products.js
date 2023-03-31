export default {
    name:'products',
    title:'Products',
    type:'document',

    fields:[{
        name:'image',
        title:'Image',
        type:'image',
        options:{
            hotspot: true,
        },
    },
    {
        name:'name',
        title:'Name',
        type:'string',
    },
    {
        name:'slug',
        title:'Slug',
        type:"slug",
        options:{
            source:'name',
            maxLength:90,
        }
    },
    {
        name:'brand',
        title:'Brand',
        type:'string',
    },
    {
        name:'details',
        title:'Details',
        type:'string',
    },
    {
        name:'sizeof',
        title:'Size',
        type:'string',
    },
    {
        name:'type',
        title:'Type',
        type:'string',
    },
    {
        name:'price',
        title:'Price',
        type:'number',
    },
    {
        name:'newprice',
        title:'OFFPrice',
        type:'number',
    },
    {
        name:'ratings',
        title:'Ratings',
        type:'number',
    },

]
}