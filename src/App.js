import React, { Component } from 'react';
import MainHeader from './components/MainHeader/MainHeader'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      posts: [
        {
          img: "https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1", 
          title: "New Dog!", 
          content:"So.... I got a new dog and he's teaching me how to workout."
        },
      ],
      titleInput:"Test Title",
      imgInput:"https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1",
      contentInput:"Test Content"
    }
  }

  handleTitleChange(e){
    this.setState({
      titleInput: e.target.value
    })
  }
  handleImgChange(e){
    this.setState({
      imgInput: e.target.value
    })
  }
  handleContentChange(e){
    this.setState({
      contentInput: e.target.value
    })
  }

  createPost = () => {
    const newPosts = this.state.posts.slice()
    newPosts.push({
      img: this.state.imgInput, 
      title: this.state.titleInput, 
      content: this.state.contentInput
    })
    this.setState({
      posts: newPosts,
    })
  }

  render() {
    console.log(this)
    const posts = this.state.posts.map((post, i) => {
      return (
        <div key={i} className="post-wrapper">
          <h6>{post.title}</h6>
          <img className="post-img" src={post.img}/>
          <p>{post.content}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <input placeholder="title" onChange={(e) => this.handleTitleChange(e)} value={this.state.titleInput}/>
        <input placeholder="image src" onChange={(e) => this.handleImgChange(e)} value={this.state.imgInput}/>
        <input placeholder="content" onChange={(e) => this.handleContentChange(e)} value={this.state.contentInput}/>
        <button onClick={this.createPost}>Create Post</button>
        <MainHeader />
        {/* The variable below, 'posts', is coming from the const above, which is getting it's value from a .map function, which is returning some JSX*/}
        {posts}
      </div>
    );
  }
}

export default App;
