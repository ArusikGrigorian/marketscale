import React from "react";
import axios from "axios";

const WithFetchedData = (Content, URL) => {
  class WithFetchedData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      URL &&
        axios
          .get(URL)
          .then((response) => {
            const data = response.data;

            //modifying data to manipulate it properly
            data.length = 8;
            data.map((singleData, i) => {
              if (singleData.Country === "Wallis and Futuna Islands") {
                singleData.Country = "Wallis Is.";
              }
              return i % 2 ? (singleData.status = "Approved") : (singleData.status = "Rejected");
            });

            this.setState({ data });
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
      return <Content data={this.state.data} />;
    }
  }

  return WithFetchedData;
};

export default WithFetchedData;
