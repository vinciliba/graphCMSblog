module.exports = {
   plugins: [
     {
       resolve: `gatsby-source-graphql`,
       options:{
           typeName:"GraphCMS",
           fieldName:`gcms`,
           url:`https://api-eu-central-1.graphcms.com/v2/cke2lp6bdbrri01z1frqh4qc2/master`
       }

     }

   ]


}