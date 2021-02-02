export default class AppLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    )
  }
}
