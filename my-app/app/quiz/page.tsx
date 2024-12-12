"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import styles from './Quiz.module.css';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
 
const formSchema = z.object({
  name: z.string({
    required_error: "Please enter a name"
}).min(2, {
 message: "Name must be more than 2 characters long"
}).max(20, {
 message: "Name must be no longer than 20 characters"
}),
question1: z.string({
 required_error: "Please select an option"
}),
question2: z.string({
 required_error: "Please select an option"
}),
question3: z.string({
 required_error: "Please select an option"
}),
question4: z.string({
 required_error: "Please select an option"
}),
question5: z.string({
 required_error: "Please select an option"
}),
question6: z.string({
 required_error: "Please select an option"
})
});

export default function Quiz() {
    const {toast} = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //   name: "",
        // },
    });
     
    // 2. Define a submit handler.
    function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        let score = 0 
        if (data.question1 === "D) Cannabi is illegal for personal use") score +=1; //Question 1
        if (data.question2 === "C) Death penalty") score += 1; //Question 2
        if (data.question3 === "E) All of the above") score += 1; // Question 3
        if (data.question4 === "B) Increased anxiety and depression") score += 1; // Question 4
        if (data.question5 === "False") score += 1; // Question 5
        if (data.question6 === "A) Providing education and resources") score += 1; // Question 6

        toast({
            title: `Thank you ${data.name}`,
            description: `You scored ${score}/6. ${score > 5 ? "Great Job!" : "Good Attempt! Try Harder Next Time!"}`,
           });

        // console.log(values)
        }
      return (
        <div className={`styles.quizContainer my-16 p-3`}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel style={{ color: 'black' }}>Question 1:</FormLabel>
                            <FormDescription className={styles.questionText}>What is your name?</FormDescription>
                            <FormControl>
                                <Input placeholder="Your name here" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="question1"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel style={{ color: 'black' }}>Question 2:</FormLabel>
                            <FormDescription className={styles.questionText}>In Singapore, what is the legal limit for possessing cannabis for personal use?</FormDescription>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                     <SelectTrigger>
                                         <SelectValue
                                            placeholder="Please select an answer"
                                            style={{ color: 'black', opacity: 0.5 }} // Adjust opacity for a placeholder effect
                                        />
                                     </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="A) 10 grams">10 grams</SelectItem>
                                    <SelectItem value="B) 20 grams">20 grams</SelectItem>
                                    <SelectItem value="C) 500 grams">500 grams</SelectItem>
                                    <SelectItem value="D) Cannabis is illegal for personal use">Illegal</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="question2"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel style={{ color: 'black' }}>Question 3:</FormLabel>
                            <FormDescription className={styles.questionText}>What is the peanlty for trafficking 500 grams or more of cannabis in Singapore?</FormDescription>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                     <SelectTrigger>
                                         <SelectValue
                                            placeholder="Please select an answer"
                                            style={{ color: 'black', opacity: 0.5 }} // Adjust opacity for a placeholder effect
                                        />
                                     </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="A) Life imprisonment">Life imprisonment</SelectItem>
                                    <SelectItem value="B) 10 years in prison">10 years in prison</SelectItem>
                                    <SelectItem value="C) Dealth penalty">Dealth penalty</SelectItem>
                                    <SelectItem value="D) Fine only">Fine only</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="question3"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel style={{ color: 'black' }}>Question 4:</FormLabel>
                            <FormDescription className={styles.questionText}>Which organisation provides support nd rehabilitation services for individuals struggling with drug abuse in Singapore?</FormDescription>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                     <SelectTrigger>
                                         <SelectValue
                                            placeholder="Please select an answer"
                                            style={{ color: 'black', opacity: 0.5 }} // Adjust opacity for a placeholder effect
                                        />
                                     </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="A) Alcoholic Anonymous">Alcoholic anonymous</SelectItem>
                                    <SelectItem value="B) Al-Anon Family Groups">Al-Anon Family Groups</SelectItem>
                                    <SelectItem value="C) National Additions Management Service (NAMS)">National Additions Management Service (NAMS)</SelectItem>
                                    <SelectItem value="D) WE CARE Community Services Limited">WE CARE Community Services Limited</SelectItem>
                                    <SelectItem value="E) All of the above">All of the above</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="question4"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel style={{ color: 'black' }}>Question 5:</FormLabel>
                            <FormDescription className={styles.questionText}>What is one common long-term effect of drug abuse on mental health?</FormDescription>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                     <SelectTrigger>
                                         <SelectValue
                                            placeholder="Please select an answer"
                                            style={{ color: 'black', opacity: 0.5 }} // Adjust opacity for a placeholder effect
                                        />
                                     </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="A) Improved cognitive function">Improved cognitive function</SelectItem>
                                    <SelectItem value="B) Increased anxiety and depression">Increased anxiety and depression</SelectItem>
                                    <SelectItem value="C) Enhanced emotional stability">Enhanced emotional stability</SelectItem>
                                    <SelectItem value="D) Better social relationships">Better social relationships</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="question5"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel style={{ color: 'black' }}>Question 6:</FormLabel>
                            <FormDescription className={styles.questionText}>Drug abuse only affects the individual using drugs and has no impact on their family or community. (True/False) </FormDescription>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                     <SelectTrigger>
                                         <SelectValue
                                            placeholder="Please select an answer"
                                            style={{ color: 'black', opacity: 0.5 }} // Adjust opacity for a placeholder effect
                                        />
                                     </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="True">True</SelectItem>
                                    <SelectItem value="False">False</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="question6"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel style={{ color: 'black' }}>Question 7:</FormLabel>
                            <FormDescription className={styles.questionText}>What is the most effective way to combat drug abuse in communities?</FormDescription>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                     <SelectTrigger>
                                         <SelectValue
                                            placeholder="Please select an answer"
                                            style={{ color: 'black', opacity: 0.5 }} // Adjust opacity for a placeholder effect
                                        />
                                     </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="A) Providing education and resources">Providing education and resources</SelectItem>
                                    <SelectItem value="B) Ignoring the problem">Ignoring the problem</SelectItem>
                                    <SelectItem value="C) Increasing penalties for drug uers">Increasing penalties for drug users</SelectItem>
                                    <SelectItem value="D) Promoting drug use as a lifestyle choice">Promoting drug use as a lifestyle choice</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    </div>
      )};
