package todolist.entity;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
    // declares this as id , and to be automatically generated
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String comments;

	// empty constructor is neccessary for hibernate
	public Task(){
    }

    public Task(String title, String comments) {
        this.title = title;
        this.comments = comments;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(nullable = false)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(nullable = false)
    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
