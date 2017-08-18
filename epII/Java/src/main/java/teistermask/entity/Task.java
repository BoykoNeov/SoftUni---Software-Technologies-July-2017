package teistermask.entity;

import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

	@Column(nullable = false)
    private String status;

	@Column(nullable = false)
    private String title;

    public Task(String status, String title){
        this.status = status;
        this.title = title;
    }

    public Task(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        if (status.equals("Open") || status.equals("In Progress") || status.equals("Finished")) {
            this.status = status;
        }
        // this is not obligatory for the exam
        else{
            throw new IllegalArgumentException("Invalid status: " + status);
        }
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
