export default  {
    methods: {
      laravelVee: function (error) {
        var errorResponse = error.response.data;
          if (errorResponse.errors !== undefined) {
            let errorFields = Object.keys(errorResponse.errors);
            for (let i = 0; i < errorFields.length; i++) {
              let field = errorFields[i];
              let errorString = errorResponse.errors[field].join(", ");
              this.errors.add({ field: field, msg: errorString });
            }
          }
      }
    }
}