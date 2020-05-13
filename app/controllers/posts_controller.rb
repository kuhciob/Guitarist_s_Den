class PostsController < ApplicationController 
    before_action :authenticate_user!, except: [:index, :show]
    before_action :set_post, only: [:show,:edit,:update,:destroy]
    def index
        @posts=Post.paginate(page: params[:page], per_page:5)
    end

    def show 
    end

    def new
        @post = Post.new
    end
    
    def create
        
        @post = Post.new(post_params) 
        @post.instance_variable_set(:@author, current_user.email)
        if @post.save 
            redirect_to @post, success: "Post was created :)"
        else
            flash.now[:danger] = "Post was NOT created :("
            render :new
        end
    end

    def edit
    end

    def update
        if @post.update_attributes(post_params)
            redirect_to @post, success: "Post was updated :)"
        else
            flash.now[:danger] = "Post was NOT updated :("
            render :edit
        end
    end
    
    def destroy
        @post.destroy
        redirect_to posts_path, success: "Post was deleted :)"
    end
    
    
    
    private 
    def post_params
        params.require(:post).permit(:title,:author,:date,:body,:image, :all_tags)
    end

    def set_post
        @post= Post.find(params[:id])
    end
    
    
end
