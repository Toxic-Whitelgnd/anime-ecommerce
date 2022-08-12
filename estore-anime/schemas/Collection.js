export default {
    name:'collections',
    title:'Collections',
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
        name:'color',
        title:'Color',
        type:'string',
    },
    {
        name:'products',
        title:'Products',
        type:'string',
    },
    {
        name:'slug',
        title:'Slug',
        type:'slug',
        options:{
            source:'name',
            maxLength:90,
        }
    }
]
}