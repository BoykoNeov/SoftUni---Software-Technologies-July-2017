<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Task;
use AppBundle\Form\TaskType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TaskController extends Controller
{
    /**
     * @param Request $request
     * @Route("/", name="index")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        // it is important to have the right use " use AppBundle\Entity\Task; "
        // We specify exactly which table to get fromo the database
        $taskRepository = $this->getDoctrine()->getRepository(Task::class);
        $tasks = $taskRepository->findAll();
        return $this->render('task/index.html.twig', ['tasks' => $tasks]);
    }

    /**
     * @param Request $request
     * @Route("/create", name="create")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function create(Request $request)
    {
        // a variable to hold the request data
        $task = new Task();
        $form = $this->createForm(TaskType::class, $task);

        // Handles the request, without this line, the next if will always return false
        // This 'fills' $task with the request information
        $form->handleRequest($request);

        // Checks if the form is submitted and valid, if so , redirects to index
        if ($form->isSubmitted() && $form->isValid()){

            // if the title or the comments are null, returns again to the create form
            if ($task->getTitle() !== null && $task->getComments() !== null) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($task);
                $entityManager->flush();

                return $this->redirectToRoute('index');
            }
        }

        // if the form is not submitted or not valid, sends the create form the the create view and redirects there
        return $this->render('task/create.html.twig', ['form' => $form->createView()]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     *
     * @param $id
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function delete($id, Request $request)
    {
        // Gets the task from the db
        $taskRepo = $this->getDoctrine()->getRepository(Task::class);
        $task = $taskRepo->find($id);

        // redirects to index if task is null (id is not valid)
        if ($task === null){
            return $this->redirectToRoute('index');
        }

        //Creates the form
        $form = $this->createForm(TaskType::class, $task);

        // Handles the request, without this line, the next if will always return false
        // This 'fills' $task with the request information
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            // Removes the task from the db and saves changes
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($task);
            $entityManager->flush();

            return $this->redirectToRoute('index');
        }

        // sends the task and the form to the view if the form is not submitted or valid
        return $this->render('task/delete.html.twig', ['task' => $task, 'form' => $form->createView()]);
    }
}
