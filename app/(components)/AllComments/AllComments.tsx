import { DELETE, getAllComments } from "@/app/api/comment/route";
import style from "./AllComments.module.css"
import { Button } from "../Button/Button";


export const AllComments = async () => {
    const comments = await getAllComments();
    return (
        <>
    {comments.length > 0 ? (
              <>
                {comments?.map(
                  (comment: { _id: string; name: string; comment: string }) => (
                    <div key={comment._id} className={style.content}>
                      <div className={style.comment}>
                        <h1>From {comment.name}</h1>
                        <p>{comment.comment}</p>
                      </div>
                      <div>
                        <Button buttonName="X" buttonStyle="delete"/>
                      </div>
                    </div>
                  )
                )}
              </>
            ) : (
              <div className={style.content}>
                <h1>No Comments At This Time.</h1>
              </div>
            )}
        </>
      );
    };