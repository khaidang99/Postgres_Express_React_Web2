const Sequelize = require('sequelize')
const db = require('./db')
const Model = Sequelize.Model;
class Todo extends Model {
    async markAsDone(){
        this.done = true;
        return this.save();
    }
    static async findTodobyId(id){
        return await Todo.findByPk(id)
    }
    static async updateDescription(text,id){
        return await Todo.update({
                description:text
            },
            {
                where:{
                    id:id
                }
            }
        )
    }
    static async deleteTodo(id){
        return await Todo.destroy({
            where:{
                id:id
            } 
        })
    }
    static async all(){
        return await Todo.findAll();
    }
}
Todo.init({
    description:{
        type: Sequelize.STRING,
    }
},{
    sequelize: db,
    modelName: 'user'
});
module.exports = Todo;
  