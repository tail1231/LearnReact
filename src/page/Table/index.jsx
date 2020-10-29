import React from "react";
import { Table } from "antd";
import { connect } from "dva";

const mapStateToProps = (state) => {
  return {
    cardsList: state.tableList.list,
    cardsLoading: state.loading.effects["tableList.getTableList"],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: "tableList/getTableList",
      });
    },
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class TablePage extends React.Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  columns = [
    {
      title: "名称",
      dataIndex: "name",
    },
    {
      title: "描述",
      dataIndex: "desc",
    },
    {
      title: "链接",
      dataIndex: "url",
    },
  ];

  render() {
    const { cardsList, cardsLoading } = this.props;
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={cardsList}
          loading={cardsLoading}
          rowKey="id"
        />
      </div>
    );
  }
}

export default TablePage;
