import React, { Component } from "react";
import styles from "./index.less";
class Case1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          fTitle: "水果",
          id: "isEvaluate",
          title: "苹果",
          isSelected: false,
          desc: "客户是否有中差评",
          type: "radio",
        },
        {
          fTitle: "水果",
          id: "lastCareTime",
          title: "香蕉",
          isSelected: false,
          desc: "最后一次发送关怀的时间",
          type: "selectTime",
        },
        {
          fTitle: "水果",
          id: "memberLevel",
          title: "香梨",
          isSelected: false,
          desc:
            "该标签基于您在会员体系中设置的会员等级。该数据延迟一天，请您使用时注意此延迟",
          type: "checkBox",
        },
        {
          fTitle: "书籍",
          id: "customerCycle",
          title: "《三国演义》",
          isSelected: false,
          desc: "（单个客户在店铺的最近付款时间-首次付款时间）/（付款次数-1）",
          type: "selectInputNumber",
        },
        {
          fTitle: "书籍",
          id: "succDormancyTime",
          title: "《水浒传》",
          isSelected: false,
          desc: "客户最近一次成功交易距离今天的时间",
          type: "selectTime",
        },
        {
          fTitle: "书籍",
          id: "payDormancyTime",
          title: "《红楼梦》",
          isSelected: false,
          desc: "客户最近一次付款距离今天的时间",
          type: "selectTime",
        },
      ],
    };
  }
  componentDidMount() {}

  formatList = () => {
    console.log(this.state.list);
    const arr = this.state.list;
    let list = [];
    arr.forEach((item, index) => {
      let obj = {};
      if (list.filter((v) => v.name === item.fTitle).length <= 0) {
        obj = {
          name: item.fTitle,
          children: arr.filter((v) => v.fTitle == arr[index].fTitle),
        };
        list.push(obj);
      }
    });
    console.log("list", list);
  };

  str = "";
  render() {
    return (
      <div className={styles.sort}>
        {this.state.list.map((item, index) => {
          if (item.fTitle != this.str) {
            this.str = item.fTitle;
            return (
              <>
                <div
                  style={{ color: "#333", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.fTitle}
                </div>
                <span>{item.title}</span>
              </>
            );
          } else {
            return (
              <>
                <span>{item.title}</span>
              </>
            );
          }
        })}
      </div>
    );
  }
}

export default Case1;
