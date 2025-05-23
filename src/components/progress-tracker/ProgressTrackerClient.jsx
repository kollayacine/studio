
'use client';

import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { initialTasks } from '@/data/progressTasks';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { CheckSquare, Square, ChevronDown } from 'lucide-react';

export default function ProgressTrackerClient() {
  const [tasks, setTasks] = useLocalStorage('bizpilot-progress-tasks', initialTasks);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure tasks are initialized if localStorage is empty or has old structure
    if (!tasks || tasks.length === 0 || !tasks[0].hasOwnProperty('description')) {
      setTasks(initialTasks);
    }
  }, [setTasks, tasks]);


  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const totalTasksCount = tasks.length;
  const progressPercentage = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;

  if (!mounted) {
    // Prevent hydration mismatch by rendering a loader or null until client-side mount
    return (
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Business Launch Checklist</CardTitle>
          <CardDescription>Loading your progress...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={0} className="w-full" />
            <p className="text-sm text-muted-foreground text-center">Loading tasks...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Business Launch Checklist</CardTitle>
        <CardDescription className="text-center">
          Follow these steps to get your business up and running. Good luck!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Progress value={progressPercentage} className="w-full h-3" />
          <p className="text-sm text-muted-foreground text-center">
            {completedTasksCount} of {totalTasksCount} tasks completed
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {tasks.map((task, index) => (
            <AccordionItem value={task.id} key={task.id} className="border-b border-border last:border-b-0">
              <AccordionPrimitive.Header className="flex items-center w-full">
                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="shrink-0 px-4 py-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-l-md hover:bg-muted/50"
                  aria-label={task.completed ? `Mark "${task.text}" as incomplete` : `Mark "${task.text}" as complete`}
                >
                  {task.completed ? 
                    <CheckSquare className="h-5 w-5 text-primary" /> : 
                    <Square className="h-5 w-5 text-muted-foreground" />
                  }
                </button>
                <AccordionPrimitive.Trigger
                  className="flex flex-1 items-center justify-between py-4 pr-4 font-medium transition-all text-left hover:no-underline focus:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-r-md [&[data-state=open]>svg]:rotate-180"
                >
                  <span className={`text-md font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {index + 1}. {task.text}
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ml-2" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pl-14 pr-4 space-y-3"> {/* Adjusted pl for alignment */}
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

