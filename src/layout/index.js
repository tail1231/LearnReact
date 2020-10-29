import { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import routes from '../../config/config'
const { Header, Footer, Sider, Content } = Layout;
import MyIcon from '../utils/MyIcon'

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: []
        }
    }
    componentDidMount() {
        this.setState({
            routes: routes.routes[0].routes
        })
    }

    render() {
        const { routes } = this.state
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']} defaultOpenKeys={['sub1']}>
                        {
                            routes.length > 0 && routes.map((item, index) => {
                                return item.hasOwnProperty('routes') ?
                                    (<SubMenu key={`sub${index + 1}`} title={<span><MyIcon type={item.icon} /><span>{item.name}</span></span>}>
                                        {
                                            item.routes.map((cItem, cIndex) => {
                                                return (
                                                    <Menu.Item key={`${cIndex}11`}><Link to={cItem.path}><MyIcon type={cItem.icon} />{cItem.name}</Link></Menu.Item>
                                                )
                                            })
                                        }
                                    </SubMenu>) :
                                    item.path === '/' ? null : <Menu.Item key={index + 1}>
                                        <Link to={item.path}>
                                            <MyIcon type={item.icon} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </Menu.Item>
                            })
                        }
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}