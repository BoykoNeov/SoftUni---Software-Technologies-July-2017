package todolist.bindingModel;

// Binding model serves to collect information sent by the user and to send model data to view
public class TaskBindingModel {

        private String title;
        private String comments;

        // empty constructor is neccessary for hibernate
        public TaskBindingModel(){
        }

        public TaskBindingModel(String title, String comments) {
            this.title = title;
            this.comments = comments;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getComments() {
            return comments;
        }

        public void setComments(String comments) {
            this.comments = comments;
        }
}
