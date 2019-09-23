import React, { Component} from 'react'
import _ from "lodash"
import './index.scss'
class ReactBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowPage: true,  // 只有一页数据时，是否显示页码编辑器
      isShowPre: false,  // 是否显示上一页区域
      isShowNext: true,  // 是否显示下一页区域
      pageCenterNum: 6,  // 下一页及上一页的中位值
      pageSizeContent: [1,2,3,4,5,6,7,8,9,10],
      selectIndex: 1
    }
  }

  componentDidMount() {
    
  }

  // 选择切换class
  typeClass(pageIndex) {
    const { selectIndex } = this.state
    return selectIndex === pageIndex ? "page_num page_num_noborder": "page_num"
  }

  // 点击页码请求
  handlePageClick(pageIndex) {
    const { selectIndex } = this.state
    const isShowPre = pageIndex > 1 ? true: false
    this.handlePageSize('pagenum', pageIndex)
    this.setState({
      selectIndex: pageIndex,
      isShowPre: isShowPre
    })
  }

  // 点击上一页请求
  handlePrePage() {
    const { selectIndex } = this.state
    const preSelectPage = selectIndex - 1 <=0 ? 1: selectIndex - 1;
    const isShowPre = preSelectPage == 1 ? false: true;
    this.handlePageSize('sub')
    this.setState({
      selectIndex: preSelectPage,
      isShowPre: isShowPre
    })
  }

  // 点击下一页请求
  handleNextPage() {
    const { selectIndex } = this.state
    const nextSelectPage = selectIndex + 1;
    const isShowNext = nextSelectPage == 1 ? false: true;
    const isShowPre = nextSelectPage > 1 ? true: false;
    this.handlePageSize('add')
    this.setState({
      selectIndex: nextSelectPage,
      isShowNext: isShowNext,
      isShowPre: isShowPre
    })
  }

  // 重新计算页码
  handlePageSize(isCountType, pageIndex) {
    const { pageSizeContent, selectIndex, pageCenterNum} = this.state
    let newSizePage = _.cloneDeep(pageSizeContent)
    let selectPage
    let newPageNum = pageCenterNum
    let isResetPage
    let prePage
    let lastPage
    let pageContent = []
    if (isCountType == "add") {
      selectPage = selectIndex + 1
      newPageNum = pageCenterNum
      lastPage = newSizePage[newSizePage.length - 1] + 1
      isResetPage = selectPage > newPageNum ? true: false
      if (isResetPage) { 
        newSizePage.splice(0,1)
        newSizePage.splice(newSizePage.length,0, lastPage)
      }
    }
    if (isCountType == "sub") {
      selectPage = selectIndex - 1
      newPageNum = pageCenterNum - 1
      prePage =  newSizePage[0] - 1
      isResetPage = selectPage > newPageNum ? true: false
      if (isResetPage) {
        newSizePage.splice(newSizePage.length - 1, 1)
        newSizePage.splice(0,0, prePage)
      }
    }
    if (isCountType == "pagenum") {
      newPageNum = pageCenterNum
      isResetPage = true
      const startNum = pageIndex - 5 <=0 ? 1: pageIndex - 5
      for (let i = 0; i < 10; i++) {
        pageContent.push(startNum + i)
      }
      newSizePage = pageContent
    }
    this.setState({
      pageSizeContent: isResetPage ? newSizePage: pageSizeContent
    })
  }
  

  render () {
    const { 
      isShowPage,
      isShowPre,
      isShowNext,
      pageSizeContent
    } = this.state
    const renderPage = () => {
      return <div className='page_content_num'>
        {
          pageSizeContent.map((item,index) => {
            return <div 
              className={this.typeClass(item)}
              onClick={this.handlePageClick.bind(this,item)}
            >
            {item}
            </div>
          })
        }
      </div>
    }
    return (
      <div>
        {
          isShowPage && <div className="bk_page_content">
            {
              isShowPre && <div 
                className="pre_next_on page_pre"
                onClick={this.handlePrePage.bind(this)}
              >&lt;上一页</div>
            }
            <div className="page_content">{renderPage()}</div>
            {
              isShowNext && <div 
                className="pre_next_on page_next"
                onClick={this.handleNextPage.bind(this)}
              >下一页&gt;</div>
            }
          </div>
        }
      </div>
    )
  }
}

export default ReactBasic