import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredPosts } from "../../data/projects";
import { ThumbsUp, MessageSquare, Rss } from 'lucide-react';
import Link from "next/link";

const getPostTitle = (content: string) => {
  const firstLine = content.split('\n').find(line => line.trim().length > 0);
  return firstLine ? firstLine.substring(0, 60) : 'post';
}

export const FeaturedPosts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Rss className="w-5 h-5" />
          Featured Posts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {featuredPosts.slice(0, 3).map((post, idx) => (
          <Card key={idx}>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4 whitespace-pre-line">{post.content}</p>
              {post.link && (
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                  aria-label={`Read more about ${getPostTitle(post.content)}`}
                >
                  Read more
                </Link>
              )}
            </CardContent>
            <CardFooter className="flex flex-wrap items-center justify-between gap-4">
                {post.tags && (
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                        ))}
                    </div>
                )}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {post.engagement.likes}
                    </span>
                    {post.engagement.comments && (
                        <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {post.engagement.comments}
                        </span>
                    )}
                </div>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};