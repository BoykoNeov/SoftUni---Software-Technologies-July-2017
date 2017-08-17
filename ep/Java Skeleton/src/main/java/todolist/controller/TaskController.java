package todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import todolist.bindingModel.TaskBindingModel;
import todolist.entity.Task;
import todolist.repository.TaskRepository;

import java.util.List;

@Controller
public class TaskController {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/")
    public String index(Model model) {

        // get all tasks from the task repository
        List<Task> tasks = taskRepository.findAll();

        //sends the tasks to the view
        model.addAttribute("tasks", tasks);
        model.addAttribute("view", "task/index");

        return "base-layout";
    }

    @GetMapping("/create")
    public String create(Model model) {

        model.addAttribute("view", "task/create");
        return "base-layout";
    }

    @PostMapping("/create")
    public String createProcess(Model model, TaskBindingModel taskBindingModel) {

        // redirects to main page if the viewmodel is null
        if (taskBindingModel == null){
            return "redirect:/";
        }

        // redirects to main page if the title or the comments are not entered and submitted
        if (taskBindingModel.getTitle().equals("") || taskBindingModel.getComments().equals("")){
            return "redirect:/";
        }

        //creates a new task with the info from the taskbindingmodel and saves it to the database
        Task task = new Task(taskBindingModel.getTitle(), taskBindingModel.getComments());
        taskRepository.saveAndFlush(task);

        //redirects to main page
        return "redirect:/";
    }

    @GetMapping("/delete/{id}")
    public String delete(Model model, @PathVariable int id) {

        Task task = taskRepository.findOne(id);

        if (task == null){
            return "redirect:/";
        }

        // sends the specific view and task (can check the exact name in templates/fragments
        model.addAttribute("view", "task/delete");
        model.addAttribute("task", task);

        //if you open the base layout, you can see that it expects a "view", which
        // (can be seen in its file) expects a "task"
        return "base-layout";
    }

    @PostMapping("/delete/{id}")
    public String deleteProcess(Model model, @PathVariable int id) {

        //gets the task from the repository
        Task task = taskRepository.findOne(id);

        //check if its null
        if (task == null){
            return "redirect:/";
        }

        // deletes the task and saves changes
        taskRepository.delete(task);
        taskRepository.flush();

        return "redirect:/";
    }
}
