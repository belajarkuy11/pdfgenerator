//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            //first: '1',
            //2: '2', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            //last: 'Last Page'
        }
    }
};
var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
    {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
        name: "Shyam",
        age: "26",
      },
      {
        name: "Navjot",
        age: "26",
      },
      {
        name: "Vitthal",
        age: "26",
      },
      {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
          name: "Shyam",
          age: "26",
        },
        {
          name: "Navjot",
          age: "26",
        },
        {
          name: "Vitthal",
          age: "26",
        },
        {
            name: "Shyam",
            age: "26",
          },
          {
            name: "Navjot",
            age: "26",
          },
          {
            name: "Vitthal",
            age: "26",
          },
          {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
              name: "Shyam",
              age: "26",
            },
            {
              name: "Navjot",
              age: "26",
            },
            {
              name: "Vitthal",
              age: "26",
            },
            {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
              {
                name: "Shyam",
                age: "26",
              },
              {
                name: "Navjot",
                age: "26",
              },
              {
                name: "Vitthal",
                age: "26",
              },
  ];
  var document = {
    html: html,
    data: {
      users: users,
      tanggal: '2021-08-07'
    },
    path: "./output.pdf",
    type: "",
  };

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });