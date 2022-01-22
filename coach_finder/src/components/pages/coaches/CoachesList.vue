<template>
  <section>

    <div class="container mx-auto m-5">

      <div class="flex justify-between  items-baseline  ">
        <rounded-search placeholder="Search" v-model.trim="search">
          <template v-slot:header>
            <svg
                class="w-5 h-5 inset-center hover:cursor-pointer custom-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            @click="requestSearch"
            >
              <path
                  fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd">
              </path>
            </svg>
          </template>
        </rounded-search>
      </div>

<!--      table list   -->
      <div class=" flex flex-col space-y-2 mt-10  p-3">
        <div class="flex  space-x-3">

            <buttoni
                bg-color="bg-green-600"
                bg-hover-color="hover:bg-gray-600"
                title="Register as a Coach"
                @click="$router.push('register')"
            >
              <template v-slot:icon>
                <i class="fas fa-plus ml-3 text-xs"></i>
              </template>
            </buttoni>



            <buttoni
                bg-color="bg-red-600"
                bg-hover-color="hover:bg-gray-600"
                title="Reload"
                @click="$router.push('coaches')">
              <template v-slot:icon>
                <i class="fas fa-sync ml-3 text-xs"></i>
              </template>
            </buttoni>








        </div>

         <table-lite

            :has-checkbox="false"
            :is-loading="table.isLoading"
            :is-re-search="table.isReSearch"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            :sortable="table.sortable"
            :messages="table.messages"

        ></table-lite>
      </div>

    </div>
  </section>

</template>

<script>


const table = {
  isLoading: false,
  isReSearch: false,
  columns: [
    {
      label: "Coach Name",
      field: "name",
      width: "20%",
      sortable: true,
      isKey: true,
    },
    {
      label: "Email",
      field: "email",
      width: "20%",
      sortable: true,
      // display: function (row) {
      //   return (
      //       '<a href="#" data-id="' + row.user_id + '" class="name-btn">' + row.name + "</button>"
      //   );
      // },
    },
    {
      label: "Age",
      field: "age",
      width: "5%",
      sortable: true,
    },
    {
      label: "Skills",
      field: "skills",
      width: "30%",
      sortable: false,
    },
    {
      label: "Contact",
      field: "contact",
      width: "20%",
      display: function () {
       // const  mystring = <buttoni type="button" bgColor="bg-red-600" bgHoverColor="hover:bg-gray-600" title="Message" > <template v-slot:icon> <i class="fas fa-plus ml-3 text-xs"></i>  </template> </buttoni>;
     //  const tstring =  '<button type="button"  class="quick-btn text-sm button border rounded p-2 text-white bg-blue-600 hover:bg-blue-900 transition ease-in-out duration-500" @click="this.$router.push("/coaches/1/contact")"> Message <i class="fas fa-plus ml-3"></i></button>';
         // console.log("mystring" ,  mystring)
       //  console.log("tstring" , tstring)
        const tstring = '<router-link to="register" class=" text-sm button border rounded p-2 text-white bg-blue-600 hover:bg-gray-600 transition ease-in-out duration-500 cursor-pointer "> Contact Coach </router-link> '
        return (
            tstring
              );
      },
    },
  ],
  rows: [
    {
      name: "Williams Chinwa",
      email: "chinwawilliams@gmail.com",
      age:30,
      contact: 1,
      skills:"Java, Php, Laravel, Android"
    },
    {
      name: "Peter John",
      email: "wttest@gmail.com",
      age:29,
      contact: 2,
      skills:"Swift, CSS"
    }
  ],
  totalRecordCount: 2,
  sortable: {
    order: "name",
    sort: "asc",
  },
  messages: {
    pagingInfo: " Showing {0}-{1} of {2} ",
    pageSizeChangeLabel: " Row count: ",
    gotoPageLabel: "Go to page: ",
    noDataAvailable: " No data",
  },
};


let testdata = [{
  name: 'Ted',
  surname: 'Smith',
  position: 'Java Developer',
  email: 'ted.smith@gmail.com',
  company: 'Electrical Systems',
  age: 30,
  knownledge: 'Java, Ruby'
}];


export default {
  name: "CoachesList",
  data(){
    return{
      search:"",
      table:table,
      gridConfig: {
        title: 'View Coaches',
        theme: 'gray',
        width: 1200,
        height: 400,
        data: testdata,
        resizable: false,
        defaults: {
          type: 'string',
          width: 100,
          sortable: true,
          editable: false,
          resizable: false
        },
        selModel: 'rows',
        trackOver: true,
        columns: [{
          type: 'select'
        },{
          index: 'company',
          title: 'Company'
        },{
          index: 'name',
          title: 'Name'
        },{
          index: 'surname',
          title: 'Sur Name'
        },{
          index: 'age',
          title: 'Age',
          type: 'number',
          width: 80
        },{
          index: 'email',
          title: 'Email',
          width: 160
        }]
      }
    }
  },
  methods:{
    requestSearch(){
      console.log("search function triggered", this.search)
    }
  }
}
</script>

<style scoped>


.inset-center {
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(-50%, -50%);
}

.custom-icon:hover{
  cursor: pointer;
}

::v-deep(.vtl-paging-count-label),
::v-deep(.vtl-paging-page-label) {
 font-size: 12px;
padding: 10px;
}

::v-deep(select.vtl-paging-count-dropdown),
::v-deep(select.vtl-paging-page-dropdown){
  font-size: 12px;
}



</style>
