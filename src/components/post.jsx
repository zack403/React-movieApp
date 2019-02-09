import React, { Component } from 'react';
import http from "../services/httpService";
import config from "../config.json";




class Post extends Component {


    state = { 
        posts : []
     }


     async componentDidMount() {
        
            const {data: posts} = await http.get(config.apiUrl);
            console.log(posts);
            this.setState({posts});
      
            //  console.log("request:",error.request);
            //  console.log("response:",error.response);
            //  alert("Network unreachable");
         
         
     }

     saveData = async () => {
        const {data: post} =await http.post(config.apiUrl, {title: 'a', body: 'b'});
        const createdPost = [post, ...this.state.posts];
        this.setState({posts: createdPost });
     }

     updateData = async post => {
         await http.put(config.apiUrl + '/' + post.id, post );
         const posts = [...this.state.posts];
        const index = this.state.posts.findIndex(post);
        posts[index] = {...post};
        this.setState({posts});
     }

     deleteData = async post => {
        //  await http  .delete(config.apiUrl + '/' + post.id);
        //  const posts = this.state.posts.filter(p => p.id !== post.id);
        //  this.setState({posts});

         //or
         const originaposts = this.state.posts;
         const posts = this.state.posts.filter(p => p.id !== post.id);
         this.setState({posts});
         
         try {
            await http.delete(config.apiUrl + '/' + post.id);
         } catch (error) {
             alert("error");
             this.setState({posts: originaposts})
         }
         
     }

    render() { 
        return ( 
            <div>         
                <button onClick={this.saveData}>Add</button>       
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Update</th>
                    <th>Delete</th>

                </tr>
            </thead>
            <tbody>
            {this.state.posts.map(post => <tr key={post.id} >
                    <td>{post.title}</td>
                    <td><button>Delete</button></td>
                    <td><button>Save</button></td>
                </tr>  )}
     
            </tbody>

        </table>
            </div>
         );
    }
}
 
export default Post;